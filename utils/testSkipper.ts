import test from "@playwright/test";

export const skipIfWebkit = (message = "Not supported for Wegkit browser") => {
  test.skip(() => test.info().project.name.includes("webkit"), message);
};

export const skipIfMobile = (message = "Not supported for mobile devices") => {
  test.skip(() => test.info().project.name.includes("mobile"), message);
};
