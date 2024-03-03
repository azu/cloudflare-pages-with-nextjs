// based on https://github.com/1Copenut/c3-eleventy/blob/700ba500108ad85ffe161cbb9840ccfde4b2ae94/functions/_middleware.js#L58
export const onRequest = async ({ request, next, env }) => {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim()
    
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
    requestHeaders.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue
    );
    const response = await next({
        request: {
            headers: requestHeaders,
        },
    });
    const headers = Object.fromEntries(response.headers);
    const contentType = headers["content-type"];
    
    // 200 OK. Set CSP headers.
    if (
        response.status === 200 &&
        contentType &&
        contentType.startsWith("text/html")
    ) {
        response.headers.set("cf-nonce-generator", "HIT");
        response.headers.set(
            'Content-Security-Policy',
            contentSecurityPolicyHeaderValue
        )
        // Find the nonce string and replace it
        const rewriter = new HTMLRewriter()
            .on("script",
                new AttributeWriter("nonce", nonce))
            .transform(response);
        
        return rewriter;
    }
    
    // 304 not modified. No need to add CSP headers.
    if (response.status === 304) {
        return response;
    }
    
    return response;
};

class AttributeWriter {
    constructor(attributeName, newVal) {
        this.attributeName = attributeName;
        this.newVal = newVal;
    }
    
    element = (element) => {
        element.setAttribute(
            this.attributeName,
            this.newVal
        );
    }
}
