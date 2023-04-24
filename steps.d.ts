/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type basePage = typeof import('./pages/base.js');
type registerPage = typeof import('./pages/register.js');
type productPage = typeof import('./pages/product.js');
type helper = typeof import('./helpers/helper.js');
type ChaiWrapper = import('codeceptjs-chai');
type PageHelper = import('./helpers/pageHelper_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, basePage: basePage, registerPage: registerPage, productPage: productPage, helper: helper }
  interface Methods extends Playwright, ChaiWrapper, PageHelper, REST {}
  interface I extends ReturnType<steps_file>, WithTranslation<ChaiWrapper>, WithTranslation<PageHelper> {}
  namespace Translation {
    interface Actions {}
  }
}
