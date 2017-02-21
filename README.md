# frontend_must_knows
This is a collection of some common techniques that front-end software developer must knows.

## Questions
#### 1. A page contains two divs. Write css to keep the left div width fixed while the right div responsive to the window width.
Answer: See code at two_divs.html and two_divs2.html  
#### 2. Provide some methods of front-end optimization.
Answer:  
1. Reduce dom operations  
2. Compress images/codes before deploy  
3. Optimize JS code stucture, clear redundant code  
4. Reduce http requests, set HTTP cache wisely  
5. Speed up using CDN  
6. Cache static resources  
7. Lazy load images [Article about LazyLoad](http://www.jianshu.com/p/dc5fd46ff22c)
#### 3. What happend from inputing url to page display completed?  
Answer:  
1. Browser starts looking for IP address  
2. Details for DNS lookup: browser cache -> system cache -> router cache  
3. Browser sends a HTTP request to web server  
4. Web server 301 permanent redirect [Article about 301 redirect](http://www.ruanyifeng.com/notes/2007/08/301_redirect.html)  
5. Browser track redirect address  
6. Web server handles request  
7. Webs server sends back a HTTP response  
8. Browser displays HTML    
9. Broswer send requests to fetch assests in HTML(images, sounds, videos, css, js)  
10. Browser send async requests  
#### 4. Descrive cookie restrictions  
Answer:  
1. HTTP Access control(CORS) [Article about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)  
2. Set HttpOnly in cofig  

#### 5. How to optimize Repaint and Reflow of the browser  
Answer:  
[Article about repaint and reflow](http://www.css88.com/archives/4996)  
1. change className directly. If to change css dynamicly, use cssText  
```  
el.style.cssText +=";
left: "+left+"px;
top: " +top+"px;";
```  
2. Let DOMs do "offline" operation, then group-update at one time.  

#### 6. JS cross control methods  
Answer:  
1. jsonp  
2. modify document.domain  
3. use window.name  
4. window.postMessage  
5. CORS needs server config header: Access-Control-Allow-Origin  
6. nginx reverse proxies  

#### 7. Talk about front-end engineering
Answer:  
1. Develop rules  
2. Modules  
3. Components  
4. Components warehouse  
5. Optimization  
6. Deploy  
7. Develop flow  
8. Develop tool  

#### 9. JS deep clone  
Answer:  
```
1. $.extend(true, target, object)
2. newobj = Object.create(sourceObj)
3. newobj = JSON.parse(JSON.stringify(sourceObj))
```
#### 10. JS design patten
talk about later  
#### 11. Image preview  
