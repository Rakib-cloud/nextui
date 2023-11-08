import { Card, Skeleton } from '@nextui-org/react';
import React from 'react'

export default function loader() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <Card key={i} className="w-full p-4" radius="lg">
            <Skeleton className="rounded-lg">
              <div className="h-64 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 mt-2">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </Card>
        );
      })}
    </div>
  )
}
