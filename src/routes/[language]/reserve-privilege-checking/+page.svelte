<script lang="ts">
import {
  VBox,
  Card,
  Text,
  TextStyle,
  HorizontalAlign,
  TextAlign,
  GapSize,
} from '@bull-shark/tdh-lib-mason'
  import CheckingBackground from "$lib/module/common/CheckingBackground.svelte"
import LoadingSpin from "$lib/module/common/images/LoadingSpin.svelte"
import LayoutBase from "$lib/module/reserve-privilege-checking/view/LayoutBase.svelte"
import PrivilegeChecking from "$lib/module/reserve-privilege-checking/view/PrivilegeChecking.svelte"
import PrivilegeConfirmed from "$lib/module/reserve-privilege-checking/view/PrivilegeConfirmed.svelte"
import PrivilegeRejected from "$lib/module/reserve-privilege-checking/view/PrivilegeRejected.svelte"
import Thankyou from "$lib/module/common/Thankyou.svelte"
</script>

<!--<PrivilegeConfirmed/>-->
<PrivilegeRejected/>
<!--<Thankyou/>-->
