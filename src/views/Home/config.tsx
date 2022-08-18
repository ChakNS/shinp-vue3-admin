const config: ShinpForm.FormConfig = [
  // 项目概况
  {
    title: '项目概况',
    fold: false,
    children: [
      {
        type: 'formInput',
        key: 'price',
        row: 1,
        formItemProps: {
          label: '金额',
        },
        colProps: {
          span: 8,
        },
        typeProps: {
          size: 'small',
          suffix: 'RMB',
        },
      },
      {
        type: 'formSelect',
        key: 'channel',
        row: 1,
        formItemProps: {
          label: '支付方式',
        },
        colProps: {
          span: 8,
        },
        typeProps: {
          size: 'small',
        },
        option: [
          {
            value: 'weixin',
            title: '微信支付',
          },
          {
            value: 'zhifubao',
            title: '支付宝支付',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    title: '项目概况2',
    fold: false,
    children: [
      {
        type: 'formInput',
        key: 'price',
        row: 1,
        formItemProps: {
          label: '金额',
        },
        colProps: {
          span: 8,
        },
        typeProps: {
          size: 'small',
          suffix: 'RMB',
        },
      },
      {
        type: 'formSelect',
        key: 'channel',
        row: 1,
        formItemProps: {
          label: '支付方式',
        },
        colProps: {
          span: 8,
        },
        typeProps: {
          size: 'small',
        },
        option: [
          {
            value: 'weixin',
            title: '微信支付',
          },
          {
            value: 'zhifubao',
            title: '支付宝支付',
            disabled: true,
          },
        ],
      },
    ],
  },
]

export default config
