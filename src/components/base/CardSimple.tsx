import React from "react";

export interface CardProps {
  header: any;
  imgURL: string;
  imgURLAlt: string;
  detail: any;
  tags: any[];
  children: any;
}

export const CardSimple = ({
  header,
  imgURL,
  imgURLAlt,
  detail,
  tags,
  children,
}: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {imgURL ? <img className="w-full" src={imgURL} alt={imgURLAlt} /> : null}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{header}</div>
        <p className="text-gray-700 text-base">{detail}</p>
        <p className="text-gray-700 text-base">{children}</p>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, i) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            key={`card-tag-${i}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
