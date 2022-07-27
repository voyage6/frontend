import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';

const { TextArea } = Input;

interface Props {
  onChange: any;
  onSubmit: any;
  submitting: any;
  value: any;
}

const Editor: FC<Props> = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType='submit' loading={submitting} onClick={onSubmit} type='primary'>
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default Editor;
