import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import copy from "clipboard-copy";

const CodeBlock = ({ language, value }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        copy(value).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div>
            <div>
                <span>{language}</span>
                <button onClick={handleCopyClick}>{isCopied ? "Copied" : "Copy code"}</button>
            </div>
            <SyntaxHighlighter language={language} style={atomDark}>
                {value}
            </SyntaxHighlighter>
        </div>
    );
};

export const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <CodeBlock language={match[1]} value={String(children).replace(/\n$/, "")} {...props} />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
            remarkPlugins={[remarkGfm]}
        >
            {content}
        </ReactMarkdown>
    );
};


export default MarkdownRenderer;