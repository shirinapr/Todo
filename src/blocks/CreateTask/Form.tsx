import React from 'react';
import { Button, Form, Radio } from 'antd';
import Input from '../../components/Input';
import { useTodoContext } from '../../Context/TodoProvider';

type Props = {
  closeModal: () => void;
};

type FormValues = {
  title: string;
  description: string;
  memo: string;
  priority: string;
};

const FormComponent = ({ closeModal }: Props) => {
  const { addTodo, todoList } = useTodoContext();

  const validateMessages = {
    required: '${label} is required!',
  };

  const onFinish = (values: FormValues) => {
    addTodo(values);
  };
  console.log(todoList);

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={['title']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter Title"
          onChange={() => console.log('h')}
          label="Task title"
          height="md"
        />
      </Form.Item>
      <Form.Item name={['description']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter Description"
          onChange={() => console.log('h')}
          label="Task description"
          height="lg"
        />
      </Form.Item>
      <Form.Item name={['memo']} rules={[{ required: true }]}>
        <Input
          placeholder="Enter what you like"
          onChange={() => console.log('h')}
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
