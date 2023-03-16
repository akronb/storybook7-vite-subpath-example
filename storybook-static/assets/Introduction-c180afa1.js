import{j as t,a as e,F as a}from"./jsx-runtime-670450c2.js";import{M as l}from"./index-7cd0d66a.js";import{u as i}from"./index-4fb8b842.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-79bd02dc.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-2d4beb60.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const c="/storybook/assets/code-brackets-9ef6443e.svg",d="/storybook/assets/colors-ac9401f3.svg",p="/storybook/assets/comments-f15a6837.svg",m="/storybook/assets/direction-94a9917f.svg",h="/storybook/assets/flow-275142c6.svg",g="/storybook/assets/plugin-57148314.svg",b="/storybook/assets/repo-fb4ece47.svg",k="/storybook/assets/stackalt-2ad81543.svg";function _(r={}){const{wrapper:s}=Object.assign({},i(),r.components);return s?t(s,Object.assign({},r,{children:t(n,{})})):n();function n(){const o=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},i(),r.components);return e(a,{children:[t(l,{title:"Example/Introduction"}),`
`,t("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,t(o.h1,{children:"Welcome to Storybook"}),`
`,e(o.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,t(o.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,e(o.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,t(o.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,t(o.a,{href:"https://componentdriven.org",children:t(o.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,t("div",{className:"subheading",children:"Configure"}),`
`,e("div",{className:"link-list",children:[e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[t("img",{src:g,alt:"plugin"}),t("span",{children:e(o.p,{children:[t("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[t("img",{src:k,alt:"Build"}),t("span",{children:e(o.p,{children:[t("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[t("img",{src:d,alt:"colors"}),t("span",{children:e(o.p,{children:[t("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[t("img",{src:h,alt:"flow"}),t("span",{children:e(o.p,{children:[t("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,t("div",{className:"subheading",children:"Learn"}),`
`,e("div",{className:"link-list",children:[e("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[t("img",{src:b,alt:"repo"}),t("span",{children:e(o.p,{children:[t("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[t("img",{src:m,alt:"direction"}),t("span",{children:e(o.p,{children:[t("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),e("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[t("img",{src:c,alt:"code"}),t("span",{children:e(o.p,{children:[t("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),e("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[t("img",{src:p,alt:"comments"}),t("span",{children:e(o.p,{children:[t("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,t("div",{className:"tip-wrapper",children:e(o.p,{children:[t("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,t("code",{children:"stories/Introduction.stories.mdx"})]})})]})}}export{_ as default};
//# sourceMappingURL=Introduction-c180afa1.js.map
