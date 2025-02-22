<template>
  <div class="m-editor-data-source-methods">
    <MagicTable :data="model[name]" :columns="methodColumns"></MagicTable>

    <div class="m-editor-data-source-methods-footer">
      <TMagicButton size="small" type="primary" :disabled="disabled" plain @click="createCodeHandler"
        >添加</TMagicButton
      >
    </div>

    <CodeBlockEditor
      ref="codeBlockEditor"
      v-if="codeConfig"
      :disabled="disabled"
      :content="codeConfig"
      @submit="submitCodeHandler"
    ></CodeBlockEditor>
  </div>
</template>

<script setup lang="ts">
import { TMagicButton } from '@tmagic/design';
import type { FieldProps } from '@tmagic/form';
import type { CodeBlockContent } from '@tmagic/schema';
import { MagicTable } from '@tmagic/table';

import CodeBlockEditor from '@editor/components/CodeBlockEditor.vue';
import type { CodeParamStatement } from '@editor/type';
import { useDataSourceMethod } from '@editor/utils/use-data-source-method';

defineOptions({
  name: 'MEditorDataSourceMethods',
});

const props = withDefaults(
  defineProps<
    FieldProps<{
      type: 'data-source-methods';
    }>
  >(),
  {
    disabled: false,
  },
);

const emit = defineEmits(['change']);

const { codeConfig, codeBlockEditor, createCode, editCode, deleteCode, submitCode } = useDataSourceMethod();

const methodColumns = [
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: '注释',
    prop: 'desc',
  },
  {
    label: '参数',
    prop: 'params',
    formatter: (params: CodeParamStatement[]) => params.map((item) => item.name).join(', '),
  },
  {
    label: '操作',
    fixed: 'right',
    actions: [
      {
        text: '编辑',
        handler: (row: CodeBlockContent) => {
          editCode(props.model, row.name);
          emit('change', props.model[props.name]);
        },
      },
      {
        text: '删除',
        buttonType: 'danger',
        handler: (row: CodeBlockContent) => {
          deleteCode(props.model, row.name);
          emit('change', props.model[props.name]);
        },
      },
    ],
  },
];

const createCodeHandler = () => {
  createCode(props.model);

  emit('change', props.model[props.name]);
};

const submitCodeHandler = (values: CodeBlockContent) => {
  submitCode(values);

  emit('change', props.model[props.name]);
};
</script>
