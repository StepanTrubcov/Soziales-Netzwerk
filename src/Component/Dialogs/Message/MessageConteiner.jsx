import React from "react";
import { connect } from "react-redux";
import Message from './Message'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

const MessageConteiner = (props) => {
    return <Message {...props} />
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter(MessageConteiner)