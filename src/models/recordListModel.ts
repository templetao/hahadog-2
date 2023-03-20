const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  clone(data: { amount: number; notes: string; type: string; tags: string[] }) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;