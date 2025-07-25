# CI/CD Troubleshooting Guide

This document provides solutions for common CI/CD issues encountered in the Playwright E2E testing workflow.

## 🔍 Current Issue Analysis

Based on the latest debugging output, the following issues have been identified:

### 1. 🚨 Critical: Node.js Version Incompatibility

**Problem:** The Angular frontend container is failing with exit code 3 due to Node.js version incompatibility.

**Error Details:**
```
Node.js version v18.19.0 detected.
The Angular CLI requires a minimum Node.js version of v20.19 or v22.12.
```

**Root Cause:** The Docker image used by the `angular-ui` container contains an outdated Node.js version (v18.19.0) that doesn't meet Angular CLI's minimum requirements.

**Solution Implemented:**
- ✅ Enhanced `debug-services` action to detect Node.js version issues
- ✅ Enhanced `services-health-check` action with automatic container rebuilding
- ✅ Created dedicated `nodejs-compatibility-fix` action for proactive fixing
- ✅ Integrated Node.js compatibility check into the main workflow

**How the Fix Works:**
1. The workflow detects Node.js version issues in container logs
2. Automatically rebuilds the frontend container with `--no-cache --pull` flags
3. This forces Docker to pull the latest base image with updated Node.js
4. Restarts the container with the corrected Node.js version

### 2. 🔐 Security: NPM Vulnerabilities

**Problem:** 31 npm security vulnerabilities detected (7 low, 10 moderate, 13 high, 1 critical).

**Current Status:** Identified but not yet addressed.

**Recommended Actions:**
1. Run `npm audit fix` in the frontend container
2. For critical vulnerabilities, consider `npm audit fix --force`
3. Update vulnerable packages to secure versions
4. Implement automated security scanning in CI/CD

### 3. 🌐 Laravel API Issues - RESOLVED

**Problem 1:** Missing Composer dependencies → ✅ **FIXED**

**Problem 2:** File permission issues causing 500 errors → ✅ **SOLUTION IMPLEMENTED**

**Error Details:**
```
The stream or file "/var/www/storage/logs/laravel.log" could not be opened
in append mode: Failed to open stream: Permission denied

file_put_contents(/var/www/bootstrap/cache/config.php): 
Failed to open stream: Permission denied

ERROR  Migration table not found.
```

**Root Cause:** Laravel storage and cache directories lack proper permissions, and database migrations haven't been run.

**Solution Implemented:**
- ✅ Created `laravel-dependency-fix` action for Composer issues
- ✅ Created `laravel-error-diagnostics` action for detailed error analysis
- ✅ Created `laravel-permission-fix` action to resolve permission and database issues:
  - Fixes storage directory permissions (775, www-data:www-data)
  - Fixes bootstrap/cache permissions
  - Creates missing storage subdirectories
  - Clears and regenerates Laravel caches
  - Runs database migrations
  - Seeds database if seeders exist

### 4. 🅰️ Frontend Empty Response Issue

**Problem:** Frontend port 4200 accessible but returns "Empty reply from server".

**Root Cause:** Angular dev server may still be starting up or not serving properly.

**Solution Implemented:**
- ✅ Enhanced debug services with frontend process monitoring
- ✅ Created dedicated `frontend-startup-check` action
- ✅ Added Angular application content verification
- ✅ Improved frontend diagnostics with route testing

## 🛠️ Automated Solutions Implemented

### Node.js Compatibility Fix Action

Location: `.github/actions/nodejs-compatibility-fix/action.yml`

**Features:**
- Detects Node.js version issues in frontend container logs
- Automatically rebuilds containers with updated Node.js versions
- Provides detailed logging for troubleshooting
- Graceful fallback to standard restart for non-Node.js issues

### Laravel Dependency Fix Action

Location: `.github/actions/laravel-dependency-fix/action.yml`

**Features:**
- Waits for Composer container completion
- Verifies vendor directory and autoload.php existence
- Runs composer install if dependencies missing
- Validates Laravel environment configuration

### Laravel Error Diagnostics Action

Location: `.github/actions/laravel-error-diagnostics/action.yml`

**Features:**
- Analyzes container logs for error patterns
- Tests Laravel artisan commands
- Checks database connectivity and migration status
- Validates Laravel configuration and routes
- Tests API endpoints with detailed error reporting

### Laravel Permission Fix Action

Location: `.github/actions/laravel-permission-fix/action.yml`

**Features:**
- Fixes storage and cache directory permissions
- Creates missing Laravel directories
- Clears and regenerates Laravel caches
- Runs database migrations and seeding
- Verifies fixes with comprehensive testing

### Enhanced Debug Services Action

Location: `.github/actions/debug-services/action.yml`

**Enhanced Features:**
- Comprehensive container status analysis
- Node.js version issue detection
- Automatic container rebuild attempts
- Detailed logging of all debugging steps
- Port accessibility verification

### Improved Health Check Action

Location: `.github/actions/services-health-check/action.yml`

**New Capabilities:**
- Node.js issue detection and handling
- Automatic frontend container recovery
- Enhanced timeout management
- Dependency-aware health validation
- Detailed progress logging

## 🔧 Manual Troubleshooting Commands

### For Node.js Issues:
```bash
# Check current Node.js version in container
docker-compose exec angular-ui node --version

# Rebuild frontend container with latest image
cd app
docker-compose build --no-cache --pull angular-ui
docker-compose up -d angular-ui

# Check container logs for issues
docker-compose logs angular-ui
```

### For Port Issues:
```bash
# Check which ports are listening
netstat -tlnp | grep -E ':(3306|4200|8091)'

# Check container status
docker-compose ps

# Test port accessibility
nc -z localhost 4200 && echo "Port 4200 open" || echo "Port 4200 closed"
```

### For HTTP Issues:
```bash
# Test API endpoints
curl -v http://localhost:8091/brands

# Test frontend endpoints
curl -v http://localhost:4200/
curl -v http://localhost:4200/auth/login
```

## 📊 Monitoring and Prevention

### Recommended Monitoring:
1. **Node.js Version Checks:** Regular verification of base image Node.js versions
2. **Security Scanning:** Automated npm audit in CI/CD pipeline
3. **Health Check Optimization:** Monitor and adjust timeout values based on actual startup times
4. **Container Resource Usage:** Monitor memory and CPU usage for optimization

### Prevention Strategies:
1. **Pin Docker Base Images:** Use specific version tags instead of `latest`
2. **Regular Updates:** Schedule regular updates of Docker base images
3. **Security Automation:** Implement automated security vulnerability scanning
4. **Health Check Tuning:** Optimize health check parameters based on historical data

## 🚀 Next Steps

1. **Immediate:** Apply the Node.js compatibility fixes implemented
2. **Short-term:** Address npm security vulnerabilities
3. **Medium-term:** Investigate and fix API 500 errors
4. **Long-term:** Implement comprehensive monitoring and prevention strategies

## 📞 Support

For additional support:
1. Check GitHub Actions workflow logs for detailed error messages
2. Use the enhanced debug actions for comprehensive troubleshooting information
3. Review container logs using the provided debugging commands
4. Consult this troubleshooting guide for known issues and solutions

## 🔄 Workflow Recovery

If the workflow fails:
1. The `debug-services` action will automatically run on failure
2. Check the debug output for specific issue identification
3. The Node.js compatibility fix will attempt automatic resolution
4. Manual intervention may be required for complex issues

---

*Last Updated: $(date)*
*This document is automatically maintained as part of the CI/CD troubleshooting process.* 