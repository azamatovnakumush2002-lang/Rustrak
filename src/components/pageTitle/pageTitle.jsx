import { useEffect } from "react";

const PageTitle = (title) => {
    useEffect(() => {
        document.title = title ? `${title}` : "РусТрак";
    }, [title]);
};

export default PageTitle;
