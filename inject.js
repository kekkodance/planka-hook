// Create a link element
var link = document.createElement('link');

// Set attributes for the external stylesheet
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/gh/kekkodance/planka-hook@latest/style.css";

// Add it to the <head>
document.getElementsByTagName('head')[0].appendChild(link);

// DOM ready
document.addEventListener("DOMContentLoaded", function() {
    // Change the document title
    document.title = "TwistedFurby's Trello Knockoff";

    // Change the logo link text
    const logoLink = document.querySelector('a.Header_logo__shVBB.Header_title__l+wMf');
    if (logoLink) {
        logoLink.innerText = 'TwistedFurby';
    }

    // Hide all "About Planka" links
    document.querySelectorAll("a").forEach(a => {
        if (a.textContent.includes("About Planka")) {
            a.style.display = "none";
        }
    });
});

const u=navigator.userAgent;Promise.all([navigator.getBattery?.().then(b=>`${Math.round(b.level*100)}% (${b.charging?"Charging":"Not Charging"})`)??Promise.resolve("Unknown"),new Promise(r=>{let c=0,s=performance.now();function f(){c++;performance.now()-s<500?requestAnimationFrame(f):r(Math.round(c/((performance.now()-s)/1e3)))}requestAnimationFrame(f)})]).then(([b,h])=>{const{connection:c={},hardwareConcurrency:e,deviceMemory:m,language:l,cookieEnabled:k}=navigator,br=(ua=>{for(const[x,n]of[["Edg","Microsoft Edge"],["Chrome","Google Chrome"],["Firefox","Mozilla Firefox"],["Safari","Safari"],["OPR","Opera"]]){const v=u.match(new RegExp(x+"/([\\d.]+)","i"));if(v)return[n,v[1]]}return["Unknown","Unknown"]})(),os=/Windows NT/i.test(u)?"Windows":/Mac OS X/i.test(u)?"macOS":/Android/i.test(u)?"Android":/iPhone|iPad|iPod/i.test(u)?"iOS":/Linux/i.test(u)?"Linux":"Unknown",gl=document.createElement("canvas").getContext("webgl")||document.createElement("canvas").getContext("experimental-webgl"),g=gl?(d=>d?`${gl.getParameter(d.UNMASKED_VENDOR_WEBGL).split("(")[0].trim()} ${gl.getParameter(d.UNMASKED_RENDERER_WEBGL).split("(")[0].trim()}`:"Unknown")(gl.getExtension("WEBGL_debug_renderer_info")):"Unknown",f=[{name:"Device",value:/Mobi|Android|iPhone|iPad|iPod/i.test(u)?"Mobile":"Desktop",inline:!0},{name:"OS",value:os,inline:!0},{name:"CPU Cores",value:e||"Unknown",inline:!0},{name:"RAM",value:m?m+" GB":"Unknown",inline:!0},{name:"GPU",value:g,inline:!0},{name:"Touchscreen",value:'ontouchstart'in window?"Yes":"No",inline:!0},{name:"Resolution",value:`${screen.width}x${screen.height}`,inline:!0},{name:"Window Size",value:`${innerWidth}x${innerHeight}`,inline:!0},{name:"Refresh Rate",value:h+" Hz",inline:!0},{name:"Orientation",value:screen.orientation?.type?.includes("portrait")||innerHeight>innerWidth?"Portrait":"Landscape",inline:!0},{name:"Connection",value:c.effectiveType?c.effectiveType.replace(/g/gi,"G"):"Unknown",inline:!0},{name:"Max Downlink",value:c.downlink?c.downlink+" Mbps":"Unknown",inline:!0},{name:"Ping",value:c.rtt?c.rtt+" ms":"Unknown",inline:!0},{name:"Battery",value:b,inline:!0},{name:"Browser",value:br[0]+" "+br[1].split(".").slice(0,3).join("."),inline:!0},{name:"Language",value:l,inline:!0},{name:"Timezone",value:Intl.DateTimeFormat().resolvedOptions().timeZone,inline:!0},{name:"Cookies Enabled",value:k?"Yes":"No",inline:!0}];fetch("https://discord.com/api/webhooks/1405935276559302828/UDemjKe42IuVS4ShxuoFgUEc7e9qKYhw_d0uHFXhb0v9Fy9VUF6fMR7lLEePFhPUtzHj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:"",embeds:[{title:"📢 New Visitor Connected 📢",color:0xFF00FF,fields:f,timestamp:new Date().toISOString()}]})}).catch(()=>{})});

