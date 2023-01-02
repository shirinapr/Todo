import React from 'react';
import { Form, Radio } from 'antd';

import Input from '../Input';
import Button from '../Button';
import { ITodo } from '../../Context/TodoProvider';

type Props = {
  isEdit: boolean;
  todo?: ITodo;
  closeModal: () => void;
  onFinish: (values: any) => void;
};

const FormComponent = ({
  todo,
  isEdit,
  onFinish,
  closeModal,
}: Props) => {
  const validateMessages = {
    required: '${label} is required!',
  };

  const [form] = Form.useForm();

  const onCheck = async () => {
    const values = await form.validateFields();
    onFinish(values);
    !isEdit && form.resetFields();
    closeModal();
  };

  return (
    <Form
      form={form}
      name="nest-messages"
      onFinish={onCheck}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="title"
        rules={[{ required: true }]}
        initialValue={todo?.title}
      >
        <Input
          placeholder="Enter Title"
          onChange={() => {}}
          label="Task title"
          height="md"
          defaultValue={todo?.title}
        />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[{ required: true }]}
        initialValue={todo?.description}
      >
        <Input
          placeholder="Enter Description"
          onChange={() => {}}
          label="Task description"
          height="lg"
          defaultValue={todo?.description}
        />
      </Form.Item>

      <Form.Item
        name="target"
        rules={[{ required: true }]}
        initialValue={todo?.target}
      >
        <Input
          placeholder="Enter what you like"
          onChange={() => {}}
          label="Gift and KPI for this task ;) "
          height="md"
          defaultValue={todo?.target}
        />
      </Form.Item>

      <Form.Item
        name="priority"
        rules={[{ required: true }]}
        initialValue={todo?.priority}
      >
        <Radio.Group className="flex justify-between items-center">
          <Radio value="low"> Low </Radio>
          <Radio value="medium"> Medium </Radio>
          <Radio value="high"> High </Radio>
        </Radio.Group>
      </Form.Item>

      <div className="inline-flex gap-2">
        <Form.Item>
          <Button danger onClick={closeModal} content="CANCEL" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-600"
            content={isEdit ? 'Edit' : 'CREATE NEW TASK'}
          />
        </Form.Item>
      </div>
    </Form>
  );
};

FormComponent.defaultProps = {
  isEdit: false,
};
export default FormComponent;
