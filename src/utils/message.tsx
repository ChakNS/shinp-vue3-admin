// 扩展antd message
import { message } from 'ant-design-vue'
import { ConfigOnClose } from 'ant-design-vue/es/message'
import 'ant-design-vue/dist/antd.css'
import { VNode } from 'vue'

type ContentType = string | VNode

enum EMOJI {
  SUCCESS = '😊',
  WARN = '😯',
  ERROR = '😢',
}

const DURATION = 1.5

function baseMessage(c) {
  const defaultConfig = {
    duration: DURATION,
  }
  const config = Object.assign({}, defaultConfig, c)
  message.open(config)
}

export function ShinpSuccess(content?: ContentType, duration?: number, onClose?: ConfigOnClose) {
  baseMessage({
    content: <span style={{ color: '#52c41a' }}>{content || '调用成功'}</span>,
    duration,
    onClose,
    icon: <span>{EMOJI.SUCCESS}</span>,
  })
}

export function ShinpWarn(content?: ContentType, duration?: number, onClose?: ConfigOnClose) {
  baseMessage({
    content: <span style={{ color: '#faad14' }}>{content || '有点小问题'}</span>,
    duration,
    onClose,
    icon: <span>{EMOJI.WARN}</span>,
  })
}

export function ShinpError(content?: ContentType, duration?: number, onClose?: ConfigOnClose) {
  baseMessage({
    content: <span style={{ color: '#f5222d' }}>{content || '系统崩了'}</span>,
    duration,
    onClose,
    icon: <span>{EMOJI.ERROR}</span>,
  })
}
