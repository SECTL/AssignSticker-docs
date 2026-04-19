import { defineClientConfig } from 'vuepress/client'
import VPCopyButton from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/VPCopyButton.vue'
import Tabs from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import VPField from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/VPField.vue'
import VPTable from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/components/VPTable.vue'
import { setupMarkHighlight } from '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import '/Users/lijf/Documents/AssignSticker-docs-main/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.192_@types+markdown-it@14.1.2_esbuild@0.27.3_markdown_3fa4d2db9bc9f6b8e489854482947fae/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('VPCopyButton', VPCopyButton)
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('VPField', VPField)
    app.component('VPTable', VPTable)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
