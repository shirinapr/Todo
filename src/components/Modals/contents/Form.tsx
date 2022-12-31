import React from 'react';
import { Form, Radio } from 'antd';

import Input from '../../Input';
import Button from '../../Button';

type Props = {
  onFinish: any;
  isEdit: boolean;
  memoValue?: string;
  titleValue?: string;
  priorityValue?: string;
  closeModal: () => void;
  descriptionValue?: string;
};

const FormComponent = ({
  isEdit,
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

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="nest-messages"
      onFinish={(e) => {
        onFinish(e);
        !isEdit && form.resetFields();
      }}
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
          <Button
            type="danger"
            onClick={closeModal}
            content="CANCEL"
            className="bg-red-800"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-600"
            onClick={closeModal}
            content={isEdit ? 'Edit' : 'CREATE NEW TASK'}
          />
        </Form.Item>
      </div>
    </Form>
  );
};

FormComponent.defaultProps = {
  isEdit: false,
  memoValue: '',
  titleValue: '',
  priorityValue: '',
  descriptionValue: '',
};
export default FormComponent;
