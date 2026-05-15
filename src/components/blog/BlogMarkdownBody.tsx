import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

interface BlogMarkdownBodyProps {
  content: string;
}

const BlogMarkdownBody: React.FC<BlogMarkdownBodyProps> = ({ content }) => (
  <div className="not-prose mb-10">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        h2: ({ children }) => (
          <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-4 first:mt-0 scroll-mt-28">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-primary-800 mt-8 mb-3 scroll-mt-28">{children}</h3>
        ),
        p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-5">{children}</p>,
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2 marker:text-primary-600">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2 marker:text-primary-700 marker:font-semibold">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
        a: ({ href, children, ...props }) => {
          if (href?.startsWith('/')) {
            return (
              <Link to={href} className="text-primary-700 font-medium hover:text-primary-800 hover:underline" {...props}>
                {children}
              </Link>
            );
          }
          return (
            <a
              href={href}
              className="text-primary-700 font-medium hover:underline"
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...props}
            >
              {children}
            </a>
          );
        },
        table: ({ children }) => (
          <div className="overflow-x-auto my-8 rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="bg-primary-100 text-primary-900">{children}</thead>,
        th: ({ children }) => (
          <th className="px-4 py-3 text-left font-semibold border-b border-primary-200">{children}</th>
        ),
        td: ({ children }) => <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{children}</td>,
        tr: ({ children }) => <tr className="even:bg-primary-50/40">{children}</tr>,
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default BlogMarkdownBody;
