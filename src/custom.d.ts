type RootState = {
  createRecordError:Error | null,
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag,
  createTagError:Error | null
}
type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number // 数据类型 object | string
  createdAt?: string  // 类 / 构造函数
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

export {RecordItem,TagListModel,Tag,RootState}