import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="wrapper">
    <h1>New Redirector POC</h1>
    <div class="iframeWrapper">
    <iframe src="https://tv.client.ott.sky.com/redirector"  title="W3Schools Free Online Web Tutorials"></iframe>
    </div>
  </div>
`;
