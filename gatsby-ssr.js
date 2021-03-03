import React from "React"
import COLORS from "./src/configs/colors"

const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem("color-mode")
  const hasPersistedPreference = typeof persistedColorPreference === "string"
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const hasMediaQueryPreference = typeof mql.matches === "boolean"
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light"
  }
  // If they are using a browser/OS that doesn't support
  // color themes, let's default to 'light'.
  return "dark"
}

const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem("color-mode");
        const hasPersistedPreference = typeof persistedColorPreference === "string"
        if (hasPersistedPreference) {
            return persistedColorPreference
          }
        const mql = window.matchMedia("(prefers-color-scheme: dark)")
        const hasMediaQueryPreference = typeof mql.matches === "boolean"
        if (hasMediaQueryPreference) {
            return mql.matches ? "dark" : "light"
        }
        return "light"
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty(
      '--text-primary',
      colorMode === 'light'
        ? '${COLORS.light.textPrimary}'
        : '${COLORS.dark.textPrimary}'
    );
    root.style.setProperty(
        '--text-secondary',
        colorMode === 'light'
          ? '${COLORS.light.textSecondary}'
          : '${COLORS.dark.textSecondary}'
      );
    root.style.setProperty(
      '--bg-primary',
      colorMode === 'light'
        ? '${COLORS.light.bgPrimary}'
        : '${COLORS.dark.bgPrimary}'
    );
    root.style.setProperty(
      '--bg-secondary',
      colorMode === 'light'
        ? '${COLORS.light.bgSecondary}'
        : '${COLORS.dark.bgSecondary}'
    );
    root.style.setProperty('--initial-color-mode', colorMode);
  })()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
