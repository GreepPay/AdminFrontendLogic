import { Metric } from "../types/common"

export default class Utils {
  constructor() {
    // initiate things here
  }

  public mapOverviewData = (obj: Record<string, any>): Metric[] => {
    if (!obj) return []

    const isCurrencyField = (key: string) =>
      [
        "moneyIn",
        "moneyOut",
        "volume",
        "income",
        "withdrawals",
        "shopSales",
        "fee",
      ].includes(key)

    return Object.entries(obj)
      .filter(([key]) => key !== "__typename")
      .map(([key, value]) => {
        const label = key
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .replace(/^./, (str) => str.toUpperCase())

        const type: Metric["type"] = isCurrencyField(key)
          ? "currency"
          : "number"
        const formattedValue =
          type === "currency"
            ? `$${Number(value).toLocaleString()}`
            : Number(value).toLocaleString()

        return { label, value: formattedValue, type }
      })
  }
}
