type PostParams = {
    params: Promise<{ slug: string[] }>;
};

export default async function PostPage({ params }: PostParams) {
    const { slug } = await params;
    
    const slugPath = slug.join('/');
    
    return (
        <div>
            <h1>Post Page</h1>
            <p>Slug: {slugPath}</p>
            {slug.length >= 4 && (
                <div>
                    <p>Year: {slug[0]}</p>
                    <p>Month: {slug[1]}</p>
                    <p>Day: {slug[2]}</p>
                    <p>Post Slug: {slug[3]}</p>
                </div>
            )}
        </div>
    );
}