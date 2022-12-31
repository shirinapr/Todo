import React from 'react';
import { Button, Form, Radio } from 'antd';
import Input from '../Input';

type Props = {
  memoValue?: string;
  titleValue?: string;
  closeModal: () => void;
  onFinish: any;
  descriptionValue?: string;
  priorityValue?: string;
};

const FormComponent = ({
  onFinish,
  memoValue,
  titleValue,
  closeModal,
  descriptionValue,
  priorityValue,
}: Props) => {
  const validateMessages = {
    required: '${label} is required!',
  };

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={['title']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter Title"
          onChange={() => {}}
          label="Task title"
          height="md"
          defaultValue={titleValue}
        />
      </Form.Item>
      <Form.Item name={['description']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter Description"
          onChange={() => {}}
          label="Task description"
          height="lg"
          defaultValue={descriptionValue}
        />
      </Form.Item>
      <Form.Item name={['memo']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter what you like"
          onChange={() => {}}
          label="Gift and KPI for this task ;) "
          height="md"
          defaultValue={memoValue}
        />
      </Form.Item>
      <Form.Item name={['priority']} rules={[{ required: true }]}>
        <Radio.Group
          className="flex justify-between items-center"
          defaultValue={priorityValue}
        >
          <Radio value="low"> Low </Radio>
          <Radio value="medium"> Medium </Radio>
          <Radio value="high"> High </Radio>
        </Radio.Group>
      </Form.Item>
      <div className="inline-flex gap-2">
        <Form.Item>
          <Button danger onClick={closeModal}>
            CANCEL
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-600"
            onClick={closeModal}
          >
            CREATE NEW TASK
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

FormComponent.defaultProps = {
  memoValue: '',
  titleValue: '',
  descriptionValue: '',
  priorityValue: '',
};
export default FormComponent;
