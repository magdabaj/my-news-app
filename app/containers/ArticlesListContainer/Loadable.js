/**
 *
 * Asynchronously loads the component for ArticlesListContainer
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
