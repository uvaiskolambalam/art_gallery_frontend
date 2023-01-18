import { Alert, Space, Spin } from 'antd';
const Spinner = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Space>
      <Spin tip="" size="small">
        <div className="content" />
      </Spin>
      {/* <Spin tip="Loading">
        <div className="content" />
      </Spin>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin> */}
    </Space>

    {/* <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin> */}
  </Space>
);
export default Spinner;