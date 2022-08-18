// 扩展antd message
import { message } from 'ant-design-vue'
import { ConfigOnClose } from 'ant-design-vue/es/message'
import 'ant-design-vue/dist/antd.css'
import { VNode } from 'vue'

type ContentType = string | VNode

type TYPE = 'SUCCESS' | 'WARN' | 'ERROR'

enum EMOJI {
  SUCCESS = '😊',
  WARN = '😯',
  ERROR = '😢',
}

enum COLOR {
  SUCCESS = '#52c41a',
  WARN = '#faad14',
  ERROR = '#f5222d',
}

enum CONTENT {
  SUCCESS = '调用成功',
  WARN = '有点小问题',
  ERROR = '系统崩了',
}

const DURATION = 1.5

function baseMessage(type: TYPE, { content, duration, onClose }) {
  const config = {
    content: <span style={{ color: COLOR[type] }}>{content || CONTENT[type]}</span>,
    duration: duration || DURATION,
    icon: <span>{EMOJI[type]}</span>,
    onClose,
  }

  message.open(config)
}

export function ShinpSuccess(content?: ContentType, duration?: number, onClose?: ConfigOnClose) {
  baseMessage('SUCCESS', { content, duration, onClose })
}

export function ShinpWarn(content?: ContentType, duration?: number, onClose?: ConfigOnClose) {
  baseMessage('WARN', { content, duration, onClose })
}

export function ShinpError(content?: ContentType, duration?: number, onClose?: ConfigOnClose) {
  baseMessage('ERROR', { content, duration, onClose })
}
