<template>
  <v-card>
    <v-card-item>
      <div>
        <div class="title-card pb-4">Leave Recap</div>
        <div style="overflow-x: scroll;">
          <v-table style="min-width: 1600px;">
            <thead class="bg-grey-lighten-3">
              <tr>
                <th 
                  v-for="(header, i) in leaveRecapHeader"
                  :key="i"
                  class="text-left font-weight-black"
                  :style="header.width ? 'width:'+header.width : ''"
                >
                  {{ header.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in leaveRecapData" :key="i">
                <td>{{ data.leaveCode }}</td>
                <td>{{ data.requestedOn }}</td>
                <td>{{ data.leaveType }}</td>
                <td>{{ data.startDate }}</td>
                <td>{{ data.endDate }}</td>
                <td>{{ data.duration }} Days</td>
                <td>{{ data.dayType }}</td>
                <td>{{ data.leaveCategory }}</td>
                <td>
                  <v-chip
                    label
                    :class="getColorStatus(data.status) + ' font-weight-black'"
                  >
                    {{ data.status }}
                  </v-chip>
                </td>
                <td>{{ data.reason }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
  const getColorStatus = (status) => {
    let color = 'grey';

    if (status == 'Approve') {
      color = 'bg-green-darken-1'
    } else if (status == 'Waiting Approval') {
      color = 'bg-orange-darken-1'
    }

    return color
  }
  const leaveRecapHeader = [
    {
      title: 'Leave Code',
      key: 'leaveCode',
    },
    {
      title: 'Requested On',
      key: 'requestedOn',
    },
    {
      title: 'Leave Type',
      key: 'leaveType',
    },
    {
      title: 'Start Date',
      key: 'startDate',
    },
    {
      title: 'End Date',
      key: 'endDate'
    },
    {
      title: 'Duration',
      key: 'duration'
    },
    {
      title: 'Day Type',
      key: 'dayType'
    },
    {
      title: 'Leave Category',
      key: 'leaveCategory'
    },
    {
      title: 'Status',
      key: 'status'
    },
    {
      title: 'Reason',
      key: 'reason'
    },
  ]
  const leaveRecapData = [
    {
      leaveCode: 'LV-PTES-PT-CV10435-01-23-001',
      requestedOn: 'Mon, 02 Jan 2023',
      leaveType: 'Annual Leave',
      startDate: 'Tue, 03 Jan 2023',
      endDate: 'Tue, 03 Jan 2023',
      duration: 1,
      dayType: 'Full Day',
      leaveCategory: 'Emergency Leave',
      status: 'Approve',
      reason: 'Family Event'
    },
    {
      leaveCode: 'LV-PTES-PT-CV10435-01-23-002',
      requestedOn: 'Tue, 03 Jan 2023',
      leaveType: 'Annual Leave',
      startDate: 'Wed, 04 Jan 2023',
      endDate: 'Wed, 04 Jan 2023',
      duration: 0.5,
      dayType: 'Half Day - First Half',
      leaveCategory: 'Normal Leave',
      status: 'Approve',
      reason: 'Family Event'
    },
    {
      leaveCode: 'LV-PTES-PT-CV10435-01-23-003',
      requestedOn: 'Wed, 04 Jan 2023',
      leaveType: 'Annual Leave',
      startDate: 'Thu, 05 Jan 2023',
      endDate: 'Thu, 05 Jan 2023',
      duration: 0.5,
      dayType: 'Half Day - Second Half',
      leaveCategory: 'Normal Leave',
      status: 'Approve',
      reason: 'Family Event'
    },
    {
      leaveCode: 'LV-PTES-PT-CV10435-01-23-004',
      requestedOn: 'Thu, 05 Jan 2023',
      leaveType: 'Annual Leave',
      startDate: 'Fri, 06 Jan 2023',
      endDate: 'Fri, 06 Jan 2023',
      duration: 1,
      dayType: 'Full Day',
      leaveCategory: 'Emergency Leave',
      status: 'Waiting Approval',
      reason: 'Family Event'
    },
  ]
</script>
