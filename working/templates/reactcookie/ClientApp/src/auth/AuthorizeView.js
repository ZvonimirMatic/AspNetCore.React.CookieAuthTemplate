import { useDeepCompareEffect, useRequest } from "ahooks";
import { authorize } from "./AuthUtils";
import { useEffect } from "react";
import AuthRedirect from "./AuthRedirect";

export default function AuthorizeView({ policy, roles, children, authorizingComponent, unauthorizedComponent, shouldRedirect }) {
    // const { loading, data, run } = useRequest(authorize, { manual: true });
    const { loading, data } = useRequest(() => authorize(policy, roles), { refreshDeps: [policy, roles] });

    // useDeepCompareEffect(() => {
    //     console.log(policy, roles);
    //     // run(policy, roles);
    // }, [policy, roles]);

    if (loading || data === undefined) {
        return authorizingComponent !== undefined ? authorizingComponent : <div>Authorizing...</div>;
    }

    return data 
        ? children
        : (shouldRedirect ?? false)
        ? <AuthRedirect />
        : unauthorizedComponent !== undefined 
        ?  unauthorizedComponent : 
        <div>Unauthorized.</div>;
}