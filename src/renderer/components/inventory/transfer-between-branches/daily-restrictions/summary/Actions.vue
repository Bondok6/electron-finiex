<template>
<div class="d-flex space-between mt-2 mx-8">
<div class="text-unbold">
      <span>
          الإجمالي
      </span>
      <span class="input-style px-9 mr-4">
        29
      </span>
  </div>

  <div>
    <el-button size="mini" class="mb-1 btn-cyan">جديد F2</el-button>

    <NuxtLink :to="localePath('/inventory/transfer-between-branches')">
    <el-button size="mini" class="mb-1 btn-blue">حفظ F5</el-button>
    </NuxtLink >

    <el-button size="mini" class="mb-1" type="warning">تعديل F3</el-button>
    <el-button size="mini" class="mb-1 btn-violet-faded">بحث F7</el-button>
    <el-button size="mini" class="mb-1" type="danger">حذف F8</el-button>

    <NuxtLink :to="localePath('/inventory/transfer-between-branches')">
    <el-button size="mini" class="mb-1 btn-violet">تراجع F6</el-button>
    </NuxtLink >
    
    <el-button size="mini" class="mb-1 btn-cyan">ترحيل فاتورة F9</el-button>
    <el-button size="mini" class="mb-1" type="info">طباعة F4</el-button>
    <el-button size="mini" class="mb-1" type="info">طباعة كاشير</el-button>
  </div>
  </div>
</template>
