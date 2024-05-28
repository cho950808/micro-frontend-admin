declare global {
  interface WindowEventMap {
    "item-click": CustomEvent<{ campaignKey: String }>;
  }
}

export {};
