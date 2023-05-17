import {
  DEV_BASE_API_URL,
  PROD_BASE_API_URL,
} from "@duitku/constants/api.constant";

import type { ApiConfigOptions } from "@duitku/types/api.type";

const apiConfig = (opts?: ApiConfigOptions) => {
  const { sandbox } = opts || {};
  const BASE_API_URL = sandbox ? DEV_BASE_API_URL : PROD_BASE_API_URL;
  return {
    baseApiUrl: BASE_API_URL,
  };
};

export default apiConfig;
