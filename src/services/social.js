import OAuthManager from "react-native-social-login";

const social = new OAuthManager('van');

social.configure({
  facebook: {
    client_id: '1021544312102146',
    client_secret: '34ecb5b8d24aa4df4d6dd8af715f2f35',
  },
})

export default social