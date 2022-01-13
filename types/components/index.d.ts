import { App } from 'vue';
import DwWechatLogin from './dwWechatLogin/src/DwWechatLogin.vue';
import DwDragVerify from './dwDragVerify/src/DwDragVerify.vue';
import DwPortfolioBg from './dwPortfolioBg/src/DwPortfolioBg.vue';
import DwPortfolioIcon from './dwPortfolioIcon/src/DwPortfolioIcon.vue';
import DwPortfolioLine from './dwPortfolioLine/src/DwPortfolioLine.vue';
import DwPortfolioPie from './dwPortfolioPie/src/DwPortfolioPie.vue';
import DwPortfolioIndustry from './dwPortfolioIndustry/src/DwPortfolioIndustry.vue';
import DwStocksAnalysisLine, { AnalyzeType, ReportType } from './dwStocksAnalysisLine/src/DwStocksAnalysisLine.vue';
export { DwStocksAnalysisLine, AnalyzeType, ReportType, DwPortfolioBg, DwPortfolioIcon, DwPortfolioLine, DwPortfolioPie, DwPortfolioIndustry, DwWechatLogin, DwDragVerify, };
declare const _default: {
    version: string;
    install: (app: App<any>) => void;
};
export default _default;
