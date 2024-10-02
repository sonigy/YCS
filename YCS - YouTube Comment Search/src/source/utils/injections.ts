
function insertFileScript(pathFile: string, selector: string): void {

    try {

        const node: HTMLElement | null = document.querySelector(selector);
        const script = document.createElement('script');

        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', pathFile);
        
        node?.appendChild(script);

    } catch (e) {
        console.error('Error. Unable to inject script.', e);
        throw e;
    }

}

function removeInjectionYCS(): void {
    const scripts = document.querySelectorAll(`script[src="chrome-extension://${chrome.runtime.id}/web-resources/wresources.js"]`);
    for (const script of scripts) {
        script.remove();
    }
}


export {
    insertFileScript,
    removeInjectionYCS
};