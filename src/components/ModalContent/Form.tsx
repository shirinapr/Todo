import React from 'react';
import { Button, Form, Radio } from 'antd';
import Input from '../Input';
import { ITodo, useTodoContext } from '../../Context/TodoProvider';
import { nanoid } from 'nanoid';

type Props = {
  closeModal: () => void;
};

const FormComponent = ({ closeModal }: Props) => {
  const { addTodo } = useTodoContext();

  const validateMessages = {
    required: '${label} is required!',
  };

  const onFinish = (values: ITodo) => {
    addTodo({
      ...values,
      status: 'ongoing',
      id: nanoid(),
    });
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
        />
      </Form.Item>
      <Form.Item name={['description']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter Description"
          onChange={() => {}}
          label="Task description"
          height="lg"
        />
      </Form.Item>
      <Form.Item name={['memo']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter what you like"
          onChange={() => {}}
          label="Gift and KPI for this task ;) "
          height="md"
        />
      </Form.Item>
      <Form.Item name={['priority']}>
        <Radio.Group className="flex justify-between items-center">
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

export default FormComponent;
