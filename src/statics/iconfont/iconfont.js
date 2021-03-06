import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1532352369169'); /* IE9*/
    src: url('./iconfont.eot?t=1532352369169#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1532352369169') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1532352369169#iconfont') format('svg'); /* iOS 4.1- */
    }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`