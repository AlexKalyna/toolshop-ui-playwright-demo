import test from "@playwright/test";
import { Application } from "../app";


export const shopTest = test.extend<{
   app: Application;
}>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});





// export const shopTest = test.extend<{
//     app: Application;
//     newUser: UserContext;
//     itemAddedInCart: {
//       itemsInCart: { slug: string }[];
//     };
//     testOptions: {
//       itemsToAddInCart: { slug: string; quantity?: number }[];
//     };
//   }>({
//     testOptions: [
//       {
//         itemsToAddInCart: [
//           {
//             slug: "cherry-tomatoes",
//           },
//         ],
//       },
//       {
//         option: true,
//       },
//     ],
  
    // app: async ({ page }, use) => {
    //   const app = new Application(page);
    //   await use(app);
    // }
