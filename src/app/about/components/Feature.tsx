import React from 'react';

type FeatureProps = {
  title: string,
  description: string,
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { title?: string, titleId?: string }>,
}

export default function Feature({title, description, icon: Icon}: FeatureProps) {
  return (
    <div className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
          <Icon className="h-6 w-6 text-white" />
        </div>
        {title}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">{description}</dd>
    </div>
  )
}
