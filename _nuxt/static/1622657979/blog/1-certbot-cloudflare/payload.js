__NUXT_JSONP__("/blog/1-certbot-cloudflare", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{page:{slug:"1-certbot-cloudflare",description:"How to set up cerbot on a cloudflare based DNS website.",title:"Certbot + Cloudflare",tags:"DevOps Tips",createdAt:"2019-05-25T00:00:00.000Z",toc:[],body:{type:"root",children:[{type:b,tag:v,props:{},children:[{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:"Install Certbot"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:" software-properties-common\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" add-apt-repository universe\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:" add-apt-repository ppa:certbot\u002Fcertbot\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:" certbot python-certbot-apache\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:B},{type:b,tag:q,props:{href:C,rel:[r,s,t],target:u},children:[{type:a,value:C}]}]},{type:a,value:e},{type:b,tag:v,props:{start:2},children:[{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:"Make cloudflare.ini"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Get your "},{type:b,tag:g,props:{},children:[{type:a,value:"API key"}]},{type:a,value:" from: "},{type:b,tag:q,props:{href:D,rel:[r,s,t],target:u},children:[{type:a,value:D}]}]},{type:a,value:e},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"# In ~\u002Fcloudflare.ini"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:"# Cloudflare API credentials used by Certbot"}]},{type:a,value:"\ndns_cloudflare_email "},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:a,value:" cloudflare@example.com\ndns_cloudflare_api_key "},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:a,value:" 0123456789abcdef0123456789abcdef01234567\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Secure "},{type:b,tag:g,props:{},children:[{type:a,value:"cloudflare.ini"}]},{type:a,value:" file:"}]},{type:a,value:e},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"chmod"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"600"}]},{type:a,value:" cloudflare.ini\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:B},{type:b,tag:q,props:{href:H,rel:[r,s,t],target:u},children:[{type:a,value:H}]}]},{type:a,value:e},{type:b,tag:v,props:{start:3},children:[{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:"Install Cloudflare plugin"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:" certbot python3-certbot-dns-cloudflare\n"}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"code: "},{type:b,tag:q,props:{href:I,rel:[r,s,t],target:u},children:[{type:a,value:I}]},{type:a,value:"\nmore: "},{type:b,tag:q,props:{href:J,rel:[r,s,t],target:u},children:[{type:a,value:J}]}]},{type:a,value:e},{type:b,tag:v,props:{start:4},children:[{type:a,value:e},{type:b,tag:w,props:{},children:[{type:a,value:"Activate SSL"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Change "},{type:b,tag:g,props:{},children:[{type:a,value:"amirmasoud.me"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"www.amirmasoud.me"}]},{type:a,value:" to your domains:"}]},{type:a,value:e},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"certbot certonly "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:"\n  --dns-cloudflare "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:"\n  --dns-cloudflare-credentials ~\u002Fcloudflare.ini "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:"\n  -d amirmasoud.me "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:"\n  -d www.amirmasoud.me\n"}]}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002F1-certbot-cloudflare",extension:".md",updatedAt:"2021-06-02T18:17:28.908Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","\n","function","code"," ","sudo","p","div","nuxt-content-highlight","pre","language-shell","line-numbers","apt-get","a","nofollow","noopener","noreferrer","_blank","ol","li","punctuation","\\","install"," update\n","more: ","https:\u002F\u002Fcertbot.eff.org\u002Flets-encrypt\u002Fubuntubionic-nginx","https:\u002F\u002Fdash.cloudflare.com\u002Fprofile","comment","operator","=","https:\u002F\u002Fcertbot-dns-cloudflare.readthedocs.io\u002Fen\u002Fstable\u002F#credentials","https:\u002F\u002Fgithub.com\u002Fcertbot\u002Fcertbot\u002Ftree\u002Fmaster\u002Fcertbot-dns-cloudflare","https:\u002F\u002Fcertbot.eff.org\u002Fdocs\u002Fusing.html#plugins")));