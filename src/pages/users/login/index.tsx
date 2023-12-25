import React from "react";
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from "@ant-design/icons";
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Divider, Space, Tabs, message, theme } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import instagramLogo from "./../../../assets/image/instagramBg-removebg-preview (1).png";

type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "18px",
  verticalAlign: "middle",
  cursor: "pointer",
};

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>("phone");
  const { token } = theme.useToken();
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo={instagramLogo}
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="Instagram"
        containerStyle={{
          backgroundColor: "rgba(0, 0, 0,0.65)",
          backdropFilter: "blur(4px)",
        }}
        subTitle="The world's largest code hosting platform"
        activityConfig={{
          style: {
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
            color: token.colorTextHeading,
            borderRadius: 8,
            backgroundColor: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(4px)",
          },
          title: "Event title, configurable image",
          subTitle: "Activity introduction description text",
          action: (
            <Button
              size="large"
              style={{
                borderRadius: 20,
                background: token.colorBgElevated,
                color: token.colorPrimary,
                width: 120,
              }}
            >
              Go and have a look
            </Button>
          ),
        }}
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Divider plain>
              <Link to="/register">
                <span
                  style={{
                    color: token.colorTextPlaceholder,
                    fontWeight: "normal",
                    fontSize: 14,
                  }}
                >
                  Register in
                </span>
              </Link>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid " + token.colorPrimaryBorder,
                  borderRadius: "50%",
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: "#1677FF" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid " + token.colorPrimaryBorder,
                  borderRadius: "50%",
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: "#FF6A10" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 40,
                  width: 40,
                  border: "1px solid " + token.colorPrimaryBorder,
                  borderRadius: "50%",
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: "#1890ff" }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane
            key={"account"}
            tab={"Log in with account and password"}
          />
          <Tabs.TabPane key={"phone"} tab={"Mobile phone number login"} />
        </Tabs>
        {loginType === "account" && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: (
                  <UserOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              placeholder={"Username"}
              rules={[
                {
                  required: true,
                  message: "please enter user name!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              placeholder={"password"}
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            />
          </>
        )}
        {loginType === "phone" && (
          <>
            <ProFormText
              fieldProps={{
                size: "large",
                prefix: (
                  <MobileOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              name="mobile"
              placeholder={"Phone number"}
              rules={[
                {
                  required: true,
                  message: "Please enter phone number!",
                },
                {
                  pattern: /^1\d{50}$/,
                  message: "Malformed phone number!",
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: "large",
                prefix: (
                  <LockOutlined
                    style={{
                      color: token.colorText,
                    }}
                    className={"prefixIcon"}
                  />
                ),
              }}
              captchaProps={{
                size: "large",
              }}
              placeholder={"please enter verification code"}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${"get verification code"}`;
                }
                return "get verification code";
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: "please enter verification code!",
                },
              ]}
              onGetCaptcha={async () => {
                message.success(
                  "Obtained verification code successfully! The verification code is: 1234"
                );
              }}
            />
          </>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            auto login
          </ProFormCheckbox>
          <a
            style={{
              float: "right",
            }}
          >
            forget the password
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <ProConfigProvider dark>
      <Login />
    </ProConfigProvider>
  );
};
