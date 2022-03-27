export const CATEGORY_TYPE = { athletic: "運動系", cultural: "文化系" } as const
export type CategoryType = keyof typeof CATEGORY_TYPE
export type CategoryStr = typeof CATEGORY_TYPE[CategoryType]
