// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./style.css";
import "@catppuccin/vitepress/theme/mocha/red.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;
