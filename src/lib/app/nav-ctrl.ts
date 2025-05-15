import type {Language} from "$lib/core/l10n"
import type {AppBizContext, Platform} from '$lib/app/app-context'

export interface NavCtrl {
  page(): PagePaths

  exit(): void

  goToMorDeeAppActivity(): void

  goToMorDeeLogin(): void
}

export class DefaultNavCtrl implements NavCtrl {
  constructor(
    private readonly appMeta: {
      platform: Platform
      language: Language
      biz: Pick<AppBizContext, 'bu' | 'bc'>
    },
    private readonly routeCtor: RouteCtor = RouteCtor,
  ) {
  }

  page(): PagePaths {
    return new PagePathImpl(this.appMeta.language)
  }

  exit(): void {
    window.location.href = this.routeCtor.external.mordeeApp.closeWebView().toString()
  }

  goToMorDeeAppActivity() {
    window.location.href = this.routeCtor.external.mordeeApp.activity().toString()
  }

  goToMorDeeLogin(): void {
    window.location.href = this.routeCtor.external.mordeeApp
      .login(
        this.routeCtor.internal.home(
          this.appMeta.language,
          this.appMeta.platform
        )
      )
      .toString()
  }
}

interface PagePaths {
  idCardScanner: {
    guid: string
    scan: string
    form: string
  }
  preScreen: {
    symptomsForm: string
    userInfo: string
    address: string
  }
  selfie: {
    guid: string
    scan: string
  }
  reservePrivilege: {
    landing: string
  }
  queuing: {
    landing: string
  }
}

class PagePathImpl implements PagePaths {
  readonly idCardScanner: { guid: string; scan: string; form: string }
  readonly preScreen: { symptomsForm: string; userInfo: string; address: string }
  readonly selfie: { guid:string; scan:string }
  readonly reservePrivilege: { landing: string }
  readonly queuing: { landing: string }

  constructor(private language: Language) {
    this.idCardScanner = {
      guid: this.createPageUrl("/id-card-scanner/guid"),
      scan: this.createPageUrl("/id-card-scanner/scan"),
      form: this.createPageUrl("/id-card-scanner/form")
    }
    this.preScreen = {
      symptomsForm: this.createPageUrl("/prescreen/symptoms-form"),
      userInfo: this.createPageUrl("/prescreen/user-info"),
      address: this.createPageUrl("/prescreen/address"),
    }
    this.selfie = {
      guid: this.createPageUrl("/selfie/guid"),
      scan: this.createPageUrl("/selfie/scan"),
    }
    this.reservePrivilege = {
      landing: this.createPageUrl("/reserve-privilege")
    }
    this.queuing = {
      landing: this.createPageUrl("/queuing")
    }
  }

  private createPageUrl(path: string): string {
    return `/${this.language}${path}`
  }
}

type RouteCtor = {
  internal: {
    home: (lang: Language, platform: Platform) => URL
  }
  external: {
    mordeeApp: {
      closeWebView: () => URL
      activity: () => URL
      payment: (orderRef: string, bizContext: { bu: number; bc: number }) => URL
      login: (callback: URL, fallback?: URL) => URL
    }
  }
}

const RouteCtor: RouteCtor = {
  internal: {
    home: function (
      lang: Language,
      platform: Platform,
    ): URL {
      const url = new URL("")
      url.pathname = `/${lang}`
      url.searchParams.set('platform', platform)
      return url
    }
  },
  external: {
    mordeeApp: {
      closeWebView: function (): URL {
        const url = new URL('https://mordeeapp.com')
        url.searchParams.set('action', 'EXIT')
        return url
      },
      activity: function (): URL {
        const url = new URL('https://mordeeapp.com')
        url.searchParams.set('action', 'MY_ACTIVITY')
        return url
      },
      payment: function (orderRef: string, bizContext: { bu: number; bc: number }): URL {
        const url = new URL('https://mordeeapp.com')
        url.searchParams.set('action', 'PAYMENT')
        url.searchParams.set('bu', bizContext.bu.toString())
        url.searchParams.set('bc', bizContext.bc.toString())
        url.searchParams.set('checkout-type', 'order')
        url.searchParams.set('order-ref', orderRef)
        url.searchParams.set('product-type', 'PHYSICAL')
        url.searchParams.set('is-unfallbackable', Boolean(true).toString())
        return url
      },
      login: function (callback: URL, fallback: URL | undefined = undefined): URL {
        const url = new URL('https://mordeeapp.com')
        url.searchParams.set('action', 'REQUEST_AUTHEN')
        url.searchParams.set('callback', encodeURI(callback.toString()))
        if (fallback != undefined) url.searchParams.set('fallback', encodeURI(fallback.toString()))
        return url
      }
    }
  }
}
