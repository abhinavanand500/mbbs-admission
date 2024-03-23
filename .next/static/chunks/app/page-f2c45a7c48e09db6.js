(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{79314:function(A,e,t){Promise.resolve().then(t.bind(t,50463)),Promise.resolve().then(t.bind(t,49217)),Promise.resolve().then(t.t.bind(t,81749,23)),Promise.resolve().then(t.bind(t,11698)),Promise.resolve().then(t.bind(t,58479)),Promise.resolve().then(t.bind(t,83727)),Promise.resolve().then(t.bind(t,67809)),Promise.resolve().then(t.bind(t,52315)),Promise.resolve().then(t.bind(t,42837))},50463:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var r=t(57437),s=t(2265),i=t(7828),a=t(73067),l=t(68291),n=t(57042),o=t(74769);function u(){for(var A=arguments.length,e=Array(A),t=0;t<A;t++)e[t]=arguments[t];return(0,o.m6)((0,n.W)(e))}var c=t(74972);let d=(0,t(39213).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),g=s.forwardRef((A,e)=>{let{className:t,variant:s,size:i,asChild:a=!1,...l}=A,n=a?c.g7:"button";return(0,r.jsx)(n,{className:u(d({variant:s,size:i,className:t})),ref:e,...l})});g.displayName="Button";let h=s.createContext(null);function f(){let A=s.useContext(h);if(!A)throw Error("useCarousel must be used within a <Carousel />");return A}let b=s.forwardRef((A,e)=>{let{orientation:t="horizontal",opts:a,setApi:l,plugins:n,className:o,children:c,...d}=A,[g,f]=(0,i.Z)({...a,axis:"horizontal"===t?"x":"y"},n),[b,C]=s.useState(!1),[m,w]=s.useState(!1),Q=s.useCallback(A=>{A&&(C(A.canScrollPrev()),w(A.canScrollNext()))},[]),x=s.useCallback(()=>{null==f||f.scrollPrev()},[f]),v=s.useCallback(()=>{null==f||f.scrollNext()},[f]),p=s.useCallback(A=>{"ArrowLeft"===A.key?(A.preventDefault(),x()):"ArrowRight"===A.key&&(A.preventDefault(),v())},[x,v]);return s.useEffect(()=>{f&&l&&l(f)},[f,l]),s.useEffect(()=>{if(f)return Q(f),f.on("reInit",Q),f.on("select",Q),()=>{null==f||f.off("select",Q)}},[f,Q]),(0,r.jsx)(h.Provider,{value:{carouselRef:g,api:f,opts:a,orientation:t||((null==a?void 0:a.axis)==="y"?"vertical":"horizontal"),scrollPrev:x,scrollNext:v,canScrollPrev:b,canScrollNext:m},children:(0,r.jsx)("div",{ref:e,onKeyDownCapture:p,className:u("relative",o),role:"region","aria-roledescription":"carousel",...d,children:c})})});b.displayName="Carousel";let C=s.forwardRef((A,e)=>{let{className:t,...s}=A,{carouselRef:i,orientation:a}=f();return(0,r.jsx)("div",{ref:i,className:"overflow-hidden",children:(0,r.jsx)("div",{ref:e,className:u("flex","horizontal"===a?"-ml-4":"-mt-4 flex-col",t),...s})})});C.displayName="CarouselContent";let m=s.forwardRef((A,e)=>{let{className:t,...s}=A,{orientation:i}=f();return(0,r.jsx)("div",{ref:e,role:"group","aria-roledescription":"slide",className:u("min-w-0 shrink-0 grow-0 basis-full","horizontal"===i?"pl-4":"pt-4",t),...s})});m.displayName="CarouselItem";let w=s.forwardRef((A,e)=>{let{className:t,variant:s="outline",size:i="icon",...l}=A,{orientation:n,scrollPrev:o,canScrollPrev:c}=f();return(0,r.jsxs)(g,{ref:e,variant:s,size:i,className:u("absolute  h-8 w-8 rounded-full","horizontal"===n?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!c,onClick:o,...l,children:[(0,r.jsx)(a.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});w.displayName="CarouselPrevious";let Q=s.forwardRef((A,e)=>{let{className:t,variant:s="outline",size:i="icon",...a}=A,{orientation:n,scrollNext:o,canScrollNext:c}=f();return(0,r.jsxs)(g,{ref:e,variant:s,size:i,className:u("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!c,onClick:o,...a,children:[(0,r.jsx)(l.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Next slide"})]})});Q.displayName="CarouselNext";var x=t(78056),v=t(16691),p=t.n(v),E=t(56136),B=A=>{let{carouselData:e}=A;return(0,r.jsx)("div",{children:(0,r.jsxs)(b,{opts:{align:"start",loop:!0},plugins:[(0,E.Z)({delay:5e3})],children:[(0,r.jsx)(C,{className:"mt-5",children:e.map((A,e)=>(0,r.jsx)(m,{children:(0,r.jsx)(p(),{src:(0,x.u)(A.sliderImage).url(),alt:"slider-image",height:1e3,width:2e3,className:"h-full w-full object-cover"},e)}))}),(0,r.jsx)("div",{className:"absolute left-16 top-1/2",children:(0,r.jsx)(w,{})}),(0,r.jsx)("div",{className:"absolute right-16 top-1/2",children:(0,r.jsx)(Q,{})})]})})}},49217:function(A,e,t){"use strict";t.r(e),t.d(e,{Providers:function(){return i}});var r=t(57437),s=t(12025);function i(A){let{children:e}=A;return(0,r.jsx)(s.ThemeProvider,{children:e})}},78056:function(A,e,t){"use strict";t.d(e,{u:function(){return n}});var r=t(56985),s=t(6662),i=t.n(s);let a=(0,r.ZP)({projectId:"xz1irwuo",dataset:"production",apiVersion:"2022-08-18",useCdn:!0,token:"sk8AcWn2DeSu9ZQ0DPIZGf6PJKWDSpuVxoDDCh3mCHGe0pPZENbyxHHM9A35AscQl7I6cUCtIyZhzr3Y4PW9Emt2UmhjJTRDliS0mcu49UkogFq7zyA1FyEb7A66q4HdzRJUHezAKsbbczPeD9VCgEtNvZ7mIYN5Ci4Z2snIwF2G23Xs3lve"}),l=i()(a),n=A=>l.image(A)},11698:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/carrer-counselling2.fc729275.jpeg",height:5504,width:8256,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAArwX/AP/EABoQAAEFAQAAAAAAAAAAAAAAAAUAAQIDBBL/2gAIAQEAAT8APltecfGyjiLuv//EABcRAAMBAAAAAAAAAAAAAAAAAAABAjL/2gAIAQIBAT8ArTP/xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8AiP/Z",blurWidth:8,blurHeight:5}},58479:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/fees.e20e81f9.webp",height:363,width:626,blurDataURL:"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAABwAQCdASoIAAUAAkA4JZwAApY2oAD+/J2yVg7QM37EK+SA1nsUZwDDOAAAAA==",blurWidth:8,blurHeight:5}},83727:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/guarantee.469c2e64.webp",height:400,width:600,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JQBOgB6Q/0uAAP79QI/ecm+OYOPnk8qa8pfquXl9xtaiufZ4x/2CIAAAAA==",blurWidth:8,blurHeight:5}},67809:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/student2.326f2867.jpeg",height:3264,width:4928,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAIhZ/8QAGxAAAgIDAQAAAAAAAAAAAAAAAgMBBAAFBiH/2gAIAQEAAT8A1PR2LHTpW5ATJvKv4RRn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAgEBPwBph//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5}},52315:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/students.99db6e4e.jpeg",height:4480,width:6720,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJRMv//EABwQAAEDBQAAAAAAAAAAAAAAAAEAAgQDBQYRgv/aAAgBAQABPwA5fcmR9GjGPC//xAAYEQACAwAAAAAAAAAAAAAAAAABAgASMf/aAAgBAgEBPwC7jGM//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECEkH/2gAIAQMBAT8ArF4j/9k=",blurWidth:8,blurHeight:5}},42837:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/visa.4dd99c09.webp",height:235,width:352,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAkA4JYwCdAEfbkzOPwAA/vjQsc1fRI/+Fge083Tucp+YYB3sT9kGSXS+jAKSeYggAAA=",blurWidth:8,blurHeight:5}}},function(A){A.O(0,[590,824,852,971,938,744],function(){return A(A.s=79314)}),_N_E=A.O()}]);