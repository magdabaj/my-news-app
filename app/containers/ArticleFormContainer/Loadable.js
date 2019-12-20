/**
 *
 * Asynchronously loads the component for ArticleFormContainer
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
