import React from 'react';
import { trpc } from 'lib/trpc';
import { Layout } from 'components/Layout';

const Page = () => {
    const hello = trpc.useQuery(['hello']);
    return (
        <Layout>
            <div className="mt-4 text-center text-xl font-bold capitalize">
                hello {hello.data?.name ?? 'Unknown'}
            </div>
        </Layout>
    );
};

export default Page;
