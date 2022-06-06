import React from 'react';
import { trpc } from 'lib/trpc';

const Page = () => {
    const hello = trpc.useQuery(['hello']);
    return (
        <div className="mt-4 text-center text-xl font-bold capitalize">
            hello {hello.data?.name ?? 'Unknown'}
        </div>
    );
};

export default Page;
