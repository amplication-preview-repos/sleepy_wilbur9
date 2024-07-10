import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmailTemplateList } from "./emailTemplate/EmailTemplateList";
import { EmailTemplateCreate } from "./emailTemplate/EmailTemplateCreate";
import { EmailTemplateEdit } from "./emailTemplate/EmailTemplateEdit";
import { EmailTemplateShow } from "./emailTemplate/EmailTemplateShow";
import { GmailAccountList } from "./gmailAccount/GmailAccountList";
import { GmailAccountCreate } from "./gmailAccount/GmailAccountCreate";
import { GmailAccountEdit } from "./gmailAccount/GmailAccountEdit";
import { GmailAccountShow } from "./gmailAccount/GmailAccountShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Email Check Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmailTemplate"
          list={EmailTemplateList}
          edit={EmailTemplateEdit}
          create={EmailTemplateCreate}
          show={EmailTemplateShow}
        />
        <Resource
          name="GmailAccount"
          list={GmailAccountList}
          edit={GmailAccountEdit}
          create={GmailAccountCreate}
          show={GmailAccountShow}
        />
      </Admin>
    </div>
  );
};

export default App;
